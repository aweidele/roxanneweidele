export const Gallery = ({ gallery }) => {
  const photos = gallery.map((item) => ({
    src: item.files.lg.url,
    alt: item.title,
    width: item.files.lg.width,
    height: item.files.lg.height,
  }));
  console.log("photos", photos);
  return (
    <div>
      {gallery.map((item) => (
        <div key={item.slug}>{item.title}</div>
      ))}
    </div>
  );
};
