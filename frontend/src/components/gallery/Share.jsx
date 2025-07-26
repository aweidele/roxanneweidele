export const Share = () => {
  const pageUrl = encodeURIComponent(window.location.href);
  const pageTitle = encodeURIComponent(document.title);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`,
    bluesky: `https://bsky.app/intent/compose?text=${pageTitle}%20${pageUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`,
  };

  return (
    <div className="social-share">
      <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer">
        Share on Facebook
      </a>
      <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">
        Share on Twitter
      </a>
      <a href={shareLinks.bluesky} target="_blank" rel="noopener noreferrer">
        Share on Bluesky
      </a>
      <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer">
        Share on LinkedIn
      </a>
      <a href={shareLinks.instagram} target="_blank" rel="noopener noreferrer">
        Visit Instagram
      </a>
    </div>
  );
};
