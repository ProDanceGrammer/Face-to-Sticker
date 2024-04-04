const button = document.getElementById("submitUrlBtn");

button.addEventListener("click", async () => {
  const imageUrlInput = document.getElementById("imageUrlInput").value.trim();
  if (!imageUrlInput) {
    alert("Please enter the image URL.");
    alert("Please enter the image URL.");
    alert("Please enter the image URL.");
    return;
  }

  const res = await fetch(`/api?imageUrl=${imageUrlInput}`);

  // const res = await fetch("/api");
  const result = await res.json();
  const img1 = document.getElementById("sticker_image");
  const img2 = document.getElementById("sticker_image_background_removed");
  img1.src = result.sticker_image.url;
  img2.src = result.sticker_image_background_removed.url;
  console.log(result);
});
