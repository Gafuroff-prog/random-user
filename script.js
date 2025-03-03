document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button");

    button.addEventListener("click", async () => {
        try {
            let response = await fetch("https://randomuser.me/api/");
            let data = await response.json();
            let user = data.results[0];

            document.getElementById("user-img").src = user.picture.large;
            document.getElementById("user-name").textContent = `${user.name.first} ${user.name.last}`;
            document.getElementById("user-profession").textContent = "Frontend Developer";
            document.getElementById("user-phone").textContent = `Phone: ${user.phone || "Noma'lum"}`;
            document.getElementById("user-loc").textContent = `Manzil: ${user.location.city}, ${user.location.country}`;
            document.getElementById("user-age").textContent = `Yosh: ${user.dob.age}`;
            document.getElementById("user-email").textContent = `Email: ${user.email}`;
        } catch (error) {
            console.error("Xatolik:", error);
        }
    });
});
