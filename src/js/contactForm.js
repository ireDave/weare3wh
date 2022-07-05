import bFormAnimation from "./FormAnimation.js";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const FORMSPARK_ACTION_URL = "https://submit-form.com/wGiMqFLH";




let website ="";
window.contactForm = () => {
  return {
    data: {
      message: "",
      website: "",
    }, 
    buttonText: "Let's Talk",
    loading: false,
    submit() {
      this.data.website = website;
      this.buttonText = "Submitting...";
      this.loading = true;
      fetch(FORMSPARK_ACTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(this.data),
      })
        .then(() => {
          bFormAnimation();
        })
        .catch(() => {
          alert("Something went wrong");
        })
        .finally(() => {
          this.data.message = "";
          this.buttonText = "Submit";
          this.loading = false;
        });
    },

  
  };
};

window.websiteForm = () => {

  return {
    website: "",
    setWebsite() {
      website = this.website;
      gsap.to(window, {
        duration: 2,
        scrollTo: { y: "#contact", offsetY: 50 },
      });
    },

  }
}
