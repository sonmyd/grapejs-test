import grapejs from 'grapesjs';
import { useEffect, useState } from 'react';
import gjsPresentWebpage from 'grapesjs-preset-webpage';
import grapesjsBlocksBasic from 'grapesjs-blocks-basic';
import gjsForms from 'grapesjs-plugin-forms';
import data from "./dataFake.json";

function App() {
  const [editor, setEditor] = useState(null);
  useEffect(() => {
    if (editor != null) {
      const projectData = editor.getProjectData();
      console.log(projectData);
      editor.loadProjectData(data);
    }
  }, [editor]);


  useEffect(() => {
    const editor = grapejs.init({
      container: '#editor',
      plugins: [grapesjsBlocksBasic, gjsPresentWebpage, gjsForms],
      pluginsOpts: {
        grapesjsBlocksBasic: {},
        gjsPresentWebpage: {},
        gjsForms: {},
      },
    });
    setEditor(editor);
  }, []);

  return (
    <div className='App'>
      <div id='editor'></div>
    </div>
  );
}

export default App;
