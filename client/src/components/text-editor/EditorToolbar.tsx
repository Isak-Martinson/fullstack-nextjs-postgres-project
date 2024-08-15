import React from 'react';
import { Editor } from '@tiptap/react';
import {
  RiBold,
  RiItalic,
  RiHeading,
  RiCodeBlock,
  RiDoubleQuotesL,
  RiListUnordered,
} from '@remixicon/react';

type EditorToolbarProps = {
  editor: Editor | null;
};

const EditorToolbar: React.FC<EditorToolbarProps> = ({ editor }) => {
  if (!editor) {
    return null;
  }
  return (
    <div className='flex flex-row w-full'>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={
          editor.isActive('bold')
            ? 'is-active bg-black text-white editor-button'
            : 'editor-button'
        }
      >
        <RiBold />
      </button>
      <button className='editor-button'>
        <RiItalic />
      </button>
      <button className='editor-button'>
        <RiHeading />
      </button>
      <button className='editor-button'>
        <RiDoubleQuotesL />
      </button>
      <button className='editor-button'>
        <RiListUnordered />
      </button>
      <button className='editor-button'>
        <RiCodeBlock />
      </button>
    </div>
  );
};
export default EditorToolbar;
