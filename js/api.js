/* ============================================
   JS — Style Guide Interactions
   ============================================ */

// GitHub API token — set at runtime
// In production, this should come from a secure source
const GITHUB_TOKEN = localStorage.getItem('gh_token') || '';

/**
 * Upload a file to the webdesign repo via GitHub API
 * @param {string} path - File path in repo (e.g. 'css/custom.css')
 * @param {string} content - Raw file content (will be base64 encoded)
 * @param {string} message - Commit message
 * @returns {Promise<object>} API response
 */
async function uploadToRepo(path, content, message) {
  const base64 = btoa(unescape(encodeURIComponent(content)));
  
  // Check if file exists (need SHA to update)
  let sha = null;
  try {
    const existing = await fetch(`https://api.github.com/repos/ALKAVisuals/webdesign/contents/${path}`, {
      headers: { 'Authorization': `token ${GITHUB_TOKEN}` }
    });
    if (existing.ok) {
      const data = await existing.json();
      sha = data.sha;
    }
  } catch (e) { /* file doesn't exist yet */ }

  const body = {
    message: message,
    content: base64
  };
  if (sha) body.sha = sha;

  const resp = await fetch(`https://api.github.com/repos/ALKAVisuals/webdesign/contents/${path}`, {
    method: 'PUT',
    headers: {
      'Authorization': `token ${GITHUB_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  return resp.json();
}

/**
 * List files in a repo directory
 * @param {string} dirPath - Directory path (e.g. 'css', 'assets/images')
 * @returns {Promise<Array>} List of file objects
 */
async function listFiles(dirPath) {
  const resp = await fetch(`https://api.github.com/repos/ALKAVisuals/webdesign/contents/${dirPath}`, {
    headers: { 'Authorization': `token ${GITHUB_TOKEN}` }
  });
  if (!resp.ok) return [];
  return resp.json();
}

/**
 * Read a file from the repo
 * @param {string} path - File path in repo
 * @returns {Promise<string>} Decoded file content
 */
async function readFile(path) {
  const resp = await fetch(`https://api.github.com/repos/ALKAVisuals/webdesign/contents/${path}`, {
    headers: { 'Authorization': `token ${GITHUB_TOKEN}` }
  });
  if (!resp.ok) return null;
  const data = await resp.json();
  return atob(data.content);
}

/**
 * Delete a file from the repo
 * @param {string} path - File path in repo
 * @param {string} message - Commit message
 * @returns {Promise<object>} API response
 */
async function deleteFile(path, message) {
  // Get SHA first
  const existing = await fetch(`https://api.github.com/repos/ALKAVisuals/webdesign/contents/${path}`, {
    headers: { 'Authorization': `token ${GITHUB_TOKEN}` }
  });
  if (!existing.ok) return { error: 'File not found' };
  const data = await existing.json();

  const resp = await fetch(`https://api.github.com/repos/ALKAVisuals/webdesign/contents/${path}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `token ${GITHUB_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: message,
      sha: data.sha
    })
  });

  return resp.json();
}

// Export for inline use
window.LS = { uploadToRepo, listFiles, readFile, deleteFile };
