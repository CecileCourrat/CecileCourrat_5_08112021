

const url = new URL(window.location.href);
const requeteId = url.searchParams.get("id");
console.log(requeteId);