import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import styles from "../../styles/components/FormModal.module.scss";

interface thisProps {
    profilePicture: string
    changePicture: Function,
}

export default function PictureAdd({ profilePicture, changePicture }: thisProps) {
    const uploader = Uploader({ apiKey: "free" }); // Replace "free" with your API key.


    // const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     if (event.target.files && event.target.files.length > 0) {
    //         setSelectedFile(event.target.files[0]);
    //     }
    // };

    // const handleUpload = async () => {
    //     if (selectedFile) {
    //         try {
    //             const formData = new FormData();
    //             formData.append('file', selectedFile);
    //             formData.append("upload_preset", "l1piw8np");

    //             const res = await axios.post("https://api.cloudinary.com/v1_1/ddzkoekos/image/upload", formData);

    //             console.log('Uploaded image URL:', res);
    //             // You can access the uploaded image URL from result.secure_url
    //         } catch (error) {
    //             console.error('Upload error:', error);
    //         }
    //     }
    // };

    return (
        <div className={styles.form_image_container} >
            < img style={{ width: "200px", height: "200px", }} src={profilePicture || profilePicture} alt="" />
            {/* <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={!selectedFile} className={!selectedFile ? styles.disable : ""}> Upload</button> */}

            <UploadButton uploader={uploader}
                options={{ multi: true }}
                onComplete={files => changePicture(files.map(x => x.fileUrl).join("\n"))}>
                {({ onClick }) =>
                    <button onClick={onClick}>
                        Upload a file...
                    </button>
                }
            </UploadButton>
        </div>
    );
};


