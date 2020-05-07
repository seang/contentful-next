// import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import InstructionData from '../Data/InstructionData';

function InstructionBlock(props) {
  // Access post fields map
  // console.log(props)
  const block = props.block.fields;
  // console.log(product)

  return (
    <div className='card instruction'>
      <p class='instructionTitle'>Block Title: {block.title}</p>
      <p class='instructionHeading'>Style: {block.style}</p>
      <InstructionData block={block.instructionComponent} />
    </div>
  );
}

export default InstructionBlock;
