import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon"
import {useRouter} from "next/dist/client/router";
import {db} from "../../firebase"
import {useCollectionOnce} from "react-firebase-hooks/firestore"
import TextEditor from "../../components/TextEditor";
function Doc() {
    const router=useRouter()
    const {id}=router.query;
    const [snapshot,loadingSnapshot] = useCollectionOnce(db.collection("userDocs").doc("MERNBros").collection("docs").doc(id));

    return (
        <div>
            <header className="flex justify-between items-center p-3 pb-1">
                <span onClick={()=>router.push("/")} className="cursor-pointer">
                    <Icon name="description" size="5xl" color="blue" />
                </span>
                <div className="flex-grow px-2">
                    <h2>{snapshot?.data()?.fileName}</h2>
                    <div className="flex items-center text-sm space-x-1 -ml-1 h-8 text-gray-600">
                        <p className="option">File</p>
                        <p className="option">Edit</p>
                        <p className="option">View</p>
                        <p className="option">Insert</p>
                        <p className="option">Format</p>
                        <p className="option">Tools</p>
                    </div>
                </div>
                <Button
                        color="lightBlue"
                        buttonType="filled"
                        size= "regular"
                        className="hidden md:inline-flex h-10"
                        rounded={false}
                        block={false}
                        iconOnly={false}
                        ripple="light"
                    >
                        <Icon name="people" size="md" />SHARE
                    </Button>
                    <img 
                        src="https://avatars.githubusercontent.com/u/50224886?v=4" 
                        alt=""
                        className="cursor-pointer rounded-full h-10 w-10 ml-2"    
                    />
            </header>
            <TextEditor />
        </div>
    )
}

export default Doc
