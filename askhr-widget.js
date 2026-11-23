(function() {
  'use strict';

  // Prevent double injection
  if (document.getElementById('askhr-widget-container')) return;

  var ARTIFACT_URL = 'https://claude.ai/artifact/EDpmwP2QPNDdh7ve4w69sn';

  // Create container
  var container = document.createElement('div');
  container.id = 'askhr-widget-container';
  container.style.cssText = [
    'position:fixed',
    'bottom:0',
    'right:0',
    'width:500px',
    'height:700px',
    'z-index:2147483647',
    'pointer-events:none',
    'overflow:visible'
  ].join(';');

  // Create iframe
  var iframe = document.createElement('iframe');
  iframe.src = ARTIFACT_URL;
  iframe.title = 'AskHR - Paychex HR Assistant';
  iframe.allow = 'clipboard-read; clipboard-write';
  iframe.style.cssText = [
    'border:none',
    'width:100%',
    'height:100%',
    'pointer-events:all',
    'background:transparent'
  ].join(';');

  container.appendChild(iframe);

  // Inject when DOM is ready
  function inject() {
    if (document.body) {
      document.body.appendChild(container);
    } else {
      document.addEventListener('DOMContentLoaded', function() {
        document.body.appendChild(container);
      });
    }
  }

  inject();
})();
