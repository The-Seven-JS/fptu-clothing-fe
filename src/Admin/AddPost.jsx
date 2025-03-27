import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { useState, useEffect, useRef } from "react";
import axios from "axios"; // Import Axios
import "./AddPost.css"; // Import the CSS file
import { useLocation } from "react-router-dom";

export default function AddPost() {
  const location = useLocation();
  const { title,id,bg } = location.state || {};
  const [htmlContent, setHtmlContent] = useState(""); // Add state for HTML content
  const [fetchedData, setFetchedData] = useState(""); // Add state for fetched data
  const [postId, setPostId] = useState(null); // Add state for post ID
  const [bgimage, setBgimage] = useState(""); // Add state for title
  const [uploadStatus, setUploadStatus] = useState(""); // Add state for upload status
  const [fileName, setFileName] = useState(""); // Add state for file name
  const [blocks, setBlocks] = useState([]); // Add state for blocks
  // Use a ref to store the dynamic uploadFile function
  const uploadFileFunctionRef = useRef(async () => {
    throw new Error("Post ID is not set. Please create a post first.");
  });

  // Update the uploadFile function dynamically when postId is set
  useEffect(() => {
    if (postId) {
      uploadFileFunctionRef.current = async (file) => {
        const body = new FormData();
        body.append("file", file);

        try {
          const response = await axios.post(`https://be.fuct.gay/photos/upload-to-cloud/${postId}`, body, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            withCredentials: true
          });
          if (response.data) {
            console.log(response.data);
            return response.data.url[0];
          } else {
            console.error("Upload failed: URL not found in response");
          }
        } catch (error) {
          console.error("Error uploading file:", error);
          throw error;
        }
      };
    }
  }, [postId]); // Re-run this effect whenever postId changes

  // Initialize the editor at the top level
  const editor = useCreateBlockNote({
    uploadFile: async (file) => {
      // Always use the latest version of the uploadFile function
      return uploadFileFunctionRef.current(file);
    },

  });

  // Automatically create a new post when the page loads
  useEffect(() => {
    const createNewPost = async () => {
      try {
        const response = await axios.post("https://be.fuct.gay/articles/new", {
          title: "New Post", // Use the extracted <h2> content as the title if available
          content: "<p></p>",
        }, {withCredentials: true});
        console.log("Response:", response.data);
        setFetchedData(response.data.content);
        setPostId(response.data.id); // Store the returned ID in the state
      } catch (error) {
        console.error("Error creating new post:", error);
      }
    };

    if(!title){
        console.log(title);
        createNewPost();
    }else{
      console.log(id);
      setPostId(id);
    }
    
  }, []); // Run only once when the component mounts

  useEffect(() => {
    const loadPost = async () => {
      const loaded = await editor.tryParseHTMLToBlocks(title);
      setBlocks(loaded);
      editor.replaceBlocks(editor.document, loaded);
      console.log(blocks);
    };
    loadPost();
  }, [editor]);

  const handleSave = async () => {
    if (!postId) {
      console.error("Post ID is not available. Please create a new post first.");
      alert("Chưa tạo được bài viết! Thử lại")
      return;
    }
    if(bgimage === "" && title){
      console.log("ok");
      try {
        const response = await axios.put(`https://be.fuct.gay/articles/${postId}`, {
          title: bg, // Use the extracted <h2> content as the title if available
          content: htmlContent,
        }, {withCredentials: true});
        console.log("Response:", response.data);
        setFetchedData(response.data.content);
        alert("Đã lưu bài viết hoàn tất");
      } catch (error) {
        console.error("Error submitting data:", error);
        alert("Lưu thất bại do chưa có ảnh bìa hoặc Tiêu đề/Nội dung");
      }
    }else{
      console.log("no ok");
      try {
        const response = await axios.put(`https://be.fuct.gay/articles/${postId}`, {
          title: bgimage, // Use the extracted <h2> content as the title if available
          content: htmlContent,
        }, {withCredentials: true});
        console.log("Response:", response.data);
        setFetchedData(response.data.content);
        alert("Đã lưu bài viết hoàn tất");
      } catch (error) {
        console.error("Error submitting data:", error);
        alert("Lưu thất bại do chưa có ảnh bìa hoặc Tiêu đề/Nội dung")
      }
    }
  };

  const onChange = async () => {
    if (editor) {
      // Converts the editor's contents from Block objects to HTML and store to state.
      const html = await editor.blocksToHTMLLossy(editor.document);
      setHtmlContent(html);
    }
  };

  const handleCustomUpload = async (event) => {
    if (!postId) {
      console.error("Post ID is not available. Please create a new post first.");
      alert("Chưa tạo được bài viết! Thử lại")
      return;
    }
  
    const file = event.target.files[0]; // Get the selected file
    if (!file) {
      console.error("No file selected.");
      return;
    }
  
    setUploadStatus("selected"); // Update the upload status immediately after file selection
    setFileName(file.name); // Update the file name immediately after file selection
  
    try {
      const uploadedUrl = await uploadFileFunctionRef.current(file); // Use the uploadFile function
      setBgimage(uploadedUrl);
      if(uploadedUrl){
        alert("Đã tải lên ảnh bìa");
      }else{
        alert("Lỗi tải lên ảnh bìa! Thử lại")
      }
      const response = await axios.put(`https://be.fuct.gay/articles/${postId}`, {
        title: bgimage, // Use the extracted <h2> content as the title if available
        content: htmlContent,
      }, {withCredentials: true });
      console.log("Uploaded file URL:", uploadedUrl);
      alert(`File uploaded successfully: ${uploadedUrl}`);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  // Renders the editor instance using a React component.
  return (
    <>
      <div className="add-post">
        <div className="buttons">
        <label
  htmlFor="upload"
  className={`upload-label ${
    uploadStatus === "selected"
      ? "selected"
      : bgimage === "" && title
      ? "existing-photo-label"
      : ""
  }`}
>
  {uploadStatus === "selected"
    ? fileName
    : bgimage === "" && title
    ? "Sửa ảnh đã có"
    : "Tải lên Ảnh Bìa"}
</label>
          <button onClick={handleSave} className="save">
            Hoàn Thành
          </button>
        </div>
        <BlockNoteView className="editor" editor={editor} onChange={onChange} />
        <input
          type="file"
          id="upload"
          onChange={handleCustomUpload}
          className="upload-button"
        />
      </div>
    </>
  );
}
