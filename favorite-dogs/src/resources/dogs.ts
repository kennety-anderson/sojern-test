import axios from "axios";

const getDogImages = async () =>
  await axios.get("https://random.dog/woof.json");

export { getDogImages };
