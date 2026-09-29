const params = new URLSearchParams(window.location.search);
const requiredFieldsPresent = params.has("product") && params.has("rating") && params.has("installation-date");
const counterElement = document.querySelector("#review-count");
const previousCount = Number.parseInt(localStorage.getItem("reviewCount") || "0", 10);
let reviewCount = Number.isFinite(previousCount) ? previousCount : 0;

if (requiredFieldsPresent) {
  reviewCount += 1;
  localStorage.setItem("reviewCount", String(reviewCount));
} else {
  document.querySelector(".confirmation > p").textContent = "Complete the product review form to submit a review.";
}
counterElement.textContent = reviewCount;

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;
