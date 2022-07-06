import bFormAnimation from "./FormAnimation.js";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
import Botpoison from "@botpoison/browser";
import axios from "axios";

const botpoison = new Botpoison({
  publicKey: "pk_cf191d55-8463-48be-87d4-48bcb8a903ec",
});
const FORMSPARK_ACTION_URL = "https://submit-form.com/wGiMqFLH";
const CONFIG = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

let website = "";
window.contactForm = () => {
  return {
    data: {
      message: "",
      website: "",
    },
    buttonText: "Let's Talk",
    loading: false,
    async submit() {
      this.data.website = website;
      this.buttonText = "Submitting...";
      this.loading = true;

      const { solution } = await botpoison.challenge();
 
      await axios
        .post(
          FORMSPARK_ACTION_URL,
          {
            name: this.data.name,
            email: this.data.email,
            phone: this.data.phone,
            website: this.data.website,
            message: this.data.message,
            _botpoison: solution,
          },
          CONFIG
        )
        .then(function (response) {
          bFormAnimation();
        })
        .catch(function (error) {
          console.log(error);
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
  };
};
