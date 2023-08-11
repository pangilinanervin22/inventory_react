import styles from "../../styles/components/FormModal.module.scss";
import { requestSuccess } from "../../api";

interface thisProps {
    profilePicture: string
    changePicture: Function,
}

export default function PictureAdd({ profilePicture, changePicture }: thisProps) {
    return (
        <div className={styles.form_image_container} >
            < img style={{ width: "200px", height: "200px", }} src={profilePicture} alt="" />
            <button onClick={() => requestSuccess("232")}>
                Upload a file...
            </button>
        </div>
    );
};


