'use client';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import EditorToolbar from './EditorToolbar';

const RichTextEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World! 🌎️</p>',
  });

  return (
    <div className='p-2 border-[1px] border-black w-full rounded-md'>
      <EditorToolbar editor={editor} />
      <EditorContent
        className='p-2 h-40 overflow-scroll focus:outline-none'
        editor={editor}
      />
    </div>
  );
};

export default RichTextEditor;
