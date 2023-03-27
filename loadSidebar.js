window.addEventListener('DOMContentLoaded', function() {
  const sidebarContainer = document.getElementById('sidebarContainer');
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      sidebarContainer.innerHTML = xhr.responseText;
    }
  };
  xhr.open('GET', 'sidebar.html', true);
  xhr.send();
});

  