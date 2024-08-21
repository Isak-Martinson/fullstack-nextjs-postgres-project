'use client';
import { useEditor, EditorContent } from '@tiptap/react';
import Placeholder from '@tiptap/extension-placeholder';
import StarterKit from '@tiptap/starter-kit';
import EditorToolbar from './EditorToolbar';
import { FormEvent, useState } from 'react';

interface TestProps {
  handleChange(test: FormEvent<HTMLInputElement | HTMLDivElement>): void;
}

const RichTextEditor: React.FC<TestProps> = ({ handleChange }) => {
  const [postText, setPostText] = useState<string>('');

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [2] } }),
      Placeholder.configure({
        placeholder: 'write something...',
      }),
    ],
    content: '',
    injectCSS: false,
    onUpdate({ editor }) {
      setPostText(editor.getHTML());
    },
  });

  return (
    <div className='p-2 border-[1px] border-black w-full rounded-md'>
      <EditorToolbar editor={editor} />
      <EditorContent
        id='post_text'
        onInput={handleChange}
        className='p-2 h-40 overflow-scroll focus:outline-none'
        editor={editor}
      />
    </div>
  );
};

export default RichTextEditor;
