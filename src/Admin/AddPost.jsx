import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import "./AddPost.css"; // Import the CSS file

export default function AddPost() {
  const [htmlContent, setHtmlContent] = useState(""); // Add state for HTML content
  const [fetchedData, setFetchedData] = useState(""); // Add state for fetched data

  // Uploads a file to the server and returns the URL to the uploaded file.
  async function uploadFile(file) {
    const body = new FormData();
    body.append("file", file);

    try {
      const response = await axios.post("https://tmpfiles.org/api/v1/upload", body, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // Correctly access the url property
      if (response.data && response.data.data && response.data.data.url) {
        return response.data.data.url.replace("tmpfiles.org/", "tmpfiles.org/dl/");
      } else {
        console.error("Upload failed: URL not found in response");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
    }
  }

  // Creates a new editor instance.
  const editor = useCreateBlockNote({ uploadFile });

  const onChange = async () => {
    // Converts the editor's contents from Block objects to HTML and store to state.
    const html = await editor.blocksToHTMLLossy(editor.document);
    setHtmlContent(html);
  };

  useEffect(() => {
    // on mount, trigger initial conversion of the initial content to md
    onChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Function to handle submission
  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://34.87.162.201:3000/articles/new", {
        title: "New Post",
        content: htmlContent,
      });
      console.log("Response:", response.data);
      setFetchedData(response.data.content);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  // Renders the editor instance using a React component.
  return (
    <>
      <BlockNoteView editor={editor} onChange={onChange} />
      <div style={{ marginTop: "20px" }}>
        <h3>Preview:</h3>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}