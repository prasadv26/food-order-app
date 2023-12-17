import { useState, useContext } from "react";
import UserContext from "./../utils/UserContext";

const Section = ({ title, description }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="border border-black m-2 p-2">
      <h2 className="text-black text-xl font-bold">{title}</h2>
      {showDescription && <p>{description}</p>}
      <button
        className="bg-black text-white p-2 rounded-md"
        onClick={() => {
          setShowDescription(!showDescription);
        }}
      >
        {showDescription ? "Hide" : "Show"}
      </button>
    </div>
  );
};

const Instamart = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      Welcome to Instamart {user.name}
      <Section
        title={"About Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula turpis at feugiat. Proin fringilla, ipsum ut lacinia tristique, justo turpis dapibus turpis, vel auctor justo metus sit amet purus. Vivamus eget lacinia odio. Sed vehicula elit in est lobortis, in euismod neque lacinia. Nullam varius cursus arcu, non viverra ligula eleifend in. Cras eu erat eu est iaculis tincidunt in eu nulla."
        }
      />
      <Section
        title={"Products Instamart"}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        }
      />
      <Section
        title={"Careers at Instamart"}
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        }
      />
    </div>
  );
};
export default Instamart;
