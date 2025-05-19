import { createPortal } from "react-dom";

export const Dialog = ({ onClose }) => {
  return createPortal(
    <dialog open className="fixed top-0 left-0 w-screen h-screen z-50 bg-popup flex justify-center items-center backdrop-blur-xs p-10">
      <div className="bg-white max-h-full overflow-auto">
        <div className="sticky top-0 bg-white text-right">
          <button className="py-2 px-4">Close</button>
        </div>
        <p>
          Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Curabitur blandit mollis lacus. Curabitur vestibulum aliquam leo. Curabitur nisi. Nunc nonummy metus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Aenean imperdiet. Etiam feugiat lorem non metus. Pellentesque dapibus hendrerit tortor. Vivamus in erat ut urna
          cursus vestibulum. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Sed fringilla mauris sit amet nibh. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Nulla facilisi. Phasellus tempus. Donec posuere vulputate arcu. Etiam sit amet orci eget eros faucibus tincidunt. In
          consectetuer turpis ut velit. Vestibulum volutpat pretium libero. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum eu odio. Nunc interdum lacus sit amet orci. Mauris sollicitudin fermentum libero. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        </p>
        <p>
          Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Curabitur blandit mollis lacus. Curabitur vestibulum aliquam leo. Curabitur nisi. Nunc nonummy metus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Aenean imperdiet. Etiam feugiat lorem non metus. Pellentesque dapibus hendrerit tortor. Vivamus in erat ut urna
          cursus vestibulum. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Sed fringilla mauris sit amet nibh. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Nulla facilisi. Phasellus tempus. Donec posuere vulputate arcu. Etiam sit amet orci eget eros faucibus tincidunt. In
          consectetuer turpis ut velit. Vestibulum volutpat pretium libero. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum eu odio. Nunc interdum lacus sit amet orci. Mauris sollicitudin fermentum libero. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        </p>
        <p>
          Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Curabitur blandit mollis lacus. Curabitur vestibulum aliquam leo. Curabitur nisi. Nunc nonummy metus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Aenean imperdiet. Etiam feugiat lorem non metus. Pellentesque dapibus hendrerit tortor. Vivamus in erat ut urna
          cursus vestibulum. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Sed fringilla mauris sit amet nibh. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Nulla facilisi. Phasellus tempus. Donec posuere vulputate arcu. Etiam sit amet orci eget eros faucibus tincidunt. In
          consectetuer turpis ut velit. Vestibulum volutpat pretium libero. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum eu odio. Nunc interdum lacus sit amet orci. Mauris sollicitudin fermentum libero. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        </p>
        <p>
          Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Curabitur blandit mollis lacus. Curabitur vestibulum aliquam leo. Curabitur nisi. Nunc nonummy metus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Aenean imperdiet. Etiam feugiat lorem non metus. Pellentesque dapibus hendrerit tortor. Vivamus in erat ut urna
          cursus vestibulum. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Sed fringilla mauris sit amet nibh. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Nulla facilisi. Phasellus tempus. Donec posuere vulputate arcu. Etiam sit amet orci eget eros faucibus tincidunt. In
          consectetuer turpis ut velit. Vestibulum volutpat pretium libero. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum eu odio. Nunc interdum lacus sit amet orci. Mauris sollicitudin fermentum libero. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        </p>
        <p>
          Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Curabitur blandit mollis lacus. Curabitur vestibulum aliquam leo. Curabitur nisi. Nunc nonummy metus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Aenean imperdiet. Etiam feugiat lorem non metus. Pellentesque dapibus hendrerit tortor. Vivamus in erat ut urna
          cursus vestibulum. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Sed fringilla mauris sit amet nibh. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Nulla facilisi. Phasellus tempus. Donec posuere vulputate arcu. Etiam sit amet orci eget eros faucibus tincidunt. In
          consectetuer turpis ut velit. Vestibulum volutpat pretium libero. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum eu odio. Nunc interdum lacus sit amet orci. Mauris sollicitudin fermentum libero. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        </p>
        <p>
          Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Curabitur blandit mollis lacus. Curabitur vestibulum aliquam leo. Curabitur nisi. Nunc nonummy metus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Aenean imperdiet. Etiam feugiat lorem non metus. Pellentesque dapibus hendrerit tortor. Vivamus in erat ut urna
          cursus vestibulum. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Sed fringilla mauris sit amet nibh. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Nulla facilisi. Phasellus tempus. Donec posuere vulputate arcu. Etiam sit amet orci eget eros faucibus tincidunt. In
          consectetuer turpis ut velit. Vestibulum volutpat pretium libero. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum eu odio. Nunc interdum lacus sit amet orci. Mauris sollicitudin fermentum libero. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        </p>
        <p>
          Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Curabitur blandit mollis lacus. Curabitur vestibulum aliquam leo. Curabitur nisi. Nunc nonummy metus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Aenean imperdiet. Etiam feugiat lorem non metus. Pellentesque dapibus hendrerit tortor. Vivamus in erat ut urna
          cursus vestibulum. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Sed fringilla mauris sit amet nibh. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Nulla facilisi. Phasellus tempus. Donec posuere vulputate arcu. Etiam sit amet orci eget eros faucibus tincidunt. In
          consectetuer turpis ut velit. Vestibulum volutpat pretium libero. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum eu odio. Nunc interdum lacus sit amet orci. Mauris sollicitudin fermentum libero. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        </p>
        <p>
          Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Curabitur blandit mollis lacus. Curabitur vestibulum aliquam leo. Curabitur nisi. Nunc nonummy metus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Aenean imperdiet. Etiam feugiat lorem non metus. Pellentesque dapibus hendrerit tortor. Vivamus in erat ut urna
          cursus vestibulum. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Sed fringilla mauris sit amet nibh. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Nulla facilisi. Phasellus tempus. Donec posuere vulputate arcu. Etiam sit amet orci eget eros faucibus tincidunt. In
          consectetuer turpis ut velit. Vestibulum volutpat pretium libero. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum eu odio. Nunc interdum lacus sit amet orci. Mauris sollicitudin fermentum libero. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        </p>
        <p>
          Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Curabitur blandit mollis lacus. Curabitur vestibulum aliquam leo. Curabitur nisi. Nunc nonummy metus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Aenean imperdiet. Etiam feugiat lorem non metus. Pellentesque dapibus hendrerit tortor. Vivamus in erat ut urna
          cursus vestibulum. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Sed fringilla mauris sit amet nibh. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Nulla facilisi. Phasellus tempus. Donec posuere vulputate arcu. Etiam sit amet orci eget eros faucibus tincidunt. In
          consectetuer turpis ut velit. Vestibulum volutpat pretium libero. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum eu odio. Nunc interdum lacus sit amet orci. Mauris sollicitudin fermentum libero. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        </p>
        <p>
          Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Curabitur blandit mollis lacus. Curabitur vestibulum aliquam leo. Curabitur nisi. Nunc nonummy metus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Aenean imperdiet. Etiam feugiat lorem non metus. Pellentesque dapibus hendrerit tortor. Vivamus in erat ut urna
          cursus vestibulum. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Sed fringilla mauris sit amet nibh. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Nulla facilisi. Phasellus tempus. Donec posuere vulputate arcu. Etiam sit amet orci eget eros faucibus tincidunt. In
          consectetuer turpis ut velit. Vestibulum volutpat pretium libero. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum eu odio. Nunc interdum lacus sit amet orci. Mauris sollicitudin fermentum libero. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        </p>
        <p>
          Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Curabitur blandit mollis lacus. Curabitur vestibulum aliquam leo. Curabitur nisi. Nunc nonummy metus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Aenean imperdiet. Etiam feugiat lorem non metus. Pellentesque dapibus hendrerit tortor. Vivamus in erat ut urna
          cursus vestibulum. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Sed fringilla mauris sit amet nibh. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Nulla facilisi. Phasellus tempus. Donec posuere vulputate arcu. Etiam sit amet orci eget eros faucibus tincidunt. In
          consectetuer turpis ut velit. Vestibulum volutpat pretium libero. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum eu odio. Nunc interdum lacus sit amet orci. Mauris sollicitudin fermentum libero. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        </p>
        <p>
          Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Curabitur blandit mollis lacus. Curabitur vestibulum aliquam leo. Curabitur nisi. Nunc nonummy metus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Aenean imperdiet. Etiam feugiat lorem non metus. Pellentesque dapibus hendrerit tortor. Vivamus in erat ut urna
          cursus vestibulum. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Sed fringilla mauris sit amet nibh. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Nulla facilisi. Phasellus tempus. Donec posuere vulputate arcu. Etiam sit amet orci eget eros faucibus tincidunt. In
          consectetuer turpis ut velit. Vestibulum volutpat pretium libero. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum eu odio. Nunc interdum lacus sit amet orci. Mauris sollicitudin fermentum libero. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        </p>
        <p>
          Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Curabitur blandit mollis lacus. Curabitur vestibulum aliquam leo. Curabitur nisi. Nunc nonummy metus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Aenean imperdiet. Etiam feugiat lorem non metus. Pellentesque dapibus hendrerit tortor. Vivamus in erat ut urna
          cursus vestibulum. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Sed fringilla mauris sit amet nibh. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Nulla facilisi. Phasellus tempus. Donec posuere vulputate arcu. Etiam sit amet orci eget eros faucibus tincidunt. In
          consectetuer turpis ut velit. Vestibulum volutpat pretium libero. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum eu odio. Nunc interdum lacus sit amet orci. Mauris sollicitudin fermentum libero. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        </p>
        <p>
          Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Curabitur blandit mollis lacus. Curabitur vestibulum aliquam leo. Curabitur nisi. Nunc nonummy metus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Aenean imperdiet. Etiam feugiat lorem non metus. Pellentesque dapibus hendrerit tortor. Vivamus in erat ut urna
          cursus vestibulum. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Sed fringilla mauris sit amet nibh. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Nulla facilisi. Phasellus tempus. Donec posuere vulputate arcu. Etiam sit amet orci eget eros faucibus tincidunt. In
          consectetuer turpis ut velit. Vestibulum volutpat pretium libero. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum eu odio. Nunc interdum lacus sit amet orci. Mauris sollicitudin fermentum libero. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        </p>
        <p>
          Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Curabitur blandit mollis lacus. Curabitur vestibulum aliquam leo. Curabitur nisi. Nunc nonummy metus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Aenean imperdiet. Etiam feugiat lorem non metus. Pellentesque dapibus hendrerit tortor. Vivamus in erat ut urna
          cursus vestibulum. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Sed fringilla mauris sit amet nibh. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Nulla facilisi. Phasellus tempus. Donec posuere vulputate arcu. Etiam sit amet orci eget eros faucibus tincidunt. In
          consectetuer turpis ut velit. Vestibulum volutpat pretium libero. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum eu odio. Nunc interdum lacus sit amet orci. Mauris sollicitudin fermentum libero. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        </p>
        <p>
          Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Curabitur blandit mollis lacus. Curabitur vestibulum aliquam leo. Curabitur nisi. Nunc nonummy metus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Aenean imperdiet. Etiam feugiat lorem non metus. Pellentesque dapibus hendrerit tortor. Vivamus in erat ut urna
          cursus vestibulum. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Sed fringilla mauris sit amet nibh. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Nulla facilisi. Phasellus tempus. Donec posuere vulputate arcu. Etiam sit amet orci eget eros faucibus tincidunt. In
          consectetuer turpis ut velit. Vestibulum volutpat pretium libero. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum eu odio. Nunc interdum lacus sit amet orci. Mauris sollicitudin fermentum libero. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        </p>
        <p>
          Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Curabitur blandit mollis lacus. Curabitur vestibulum aliquam leo. Curabitur nisi. Nunc nonummy metus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Aenean imperdiet. Etiam feugiat lorem non metus. Pellentesque dapibus hendrerit tortor. Vivamus in erat ut urna
          cursus vestibulum. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Sed fringilla mauris sit amet nibh. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Nulla facilisi. Phasellus tempus. Donec posuere vulputate arcu. Etiam sit amet orci eget eros faucibus tincidunt. In
          consectetuer turpis ut velit. Vestibulum volutpat pretium libero. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum eu odio. Nunc interdum lacus sit amet orci. Mauris sollicitudin fermentum libero. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        </p>
      </div>
    </dialog>,
    document.getElementById("dialog")
  );
};
