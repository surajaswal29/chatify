import React from "react"
import {
  // MdAddLink,
  MdErrorOutline,
  MdOutlineAddPhotoAlternate,
  MdPoll,
} from "react-icons/md"

const CreatePost: React.FC = () => {
  const [postText, setPostText] = React.useState("")
  const [validatePost, setValidatePost] = React.useState({
    isDisabled: true,
    length: 0,
    errorMsg: "",
  })

  const handleNewPostText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    setPostText(value)

    function set_validity(a: boolean, b: number, c: string) {
      setValidatePost({
        isDisabled: a,
        length: b,
        errorMsg: c || "",
      })
    }

    value.length > 0
      ? set_validity(false, value.length, "")
      : set_validity(true, value.length, "")

    value.length > 250
      ? set_validity(true, value.length, "Maximum 250 characters are allowed.")
      : set_validity(false, value.length, "")
  }
  return (
    <div className="create_new_post">
      <div className="w-full h-fit">
        <textarea
          name="new_post"
          id="new_post"
          className={validatePost.length > 250 ? "text_danger" : "text_success"}
          value={postText}
          onChange={handleNewPostText}
          placeholder="What's on your mind?"
        ></textarea>
        <div className="w-full flex gap-2">
          <span className="text-xs">{validatePost.length}/250</span>
          {validatePost.length > 250 && (
            <span className="text-xs text-red-400 flex items-center gap-1">
              <MdErrorOutline size={12} />
              {validatePost.errorMsg}
            </span>
          )}
        </div>
      </div>
      <div className="new_post_action">
        <div className="new_post_wrapper_1">
          <button type="button">
            <MdOutlineAddPhotoAlternate size={20} /> Add Media
          </button>
          <button type="button">
            <MdPoll size={20} /> Create Poll
          </button>
          {/* <button type="button">
            <MdAddLink size={20} /> Share Link
          </button> */}
        </div>
        <div className="new_post_wrapper_2">
          <button
            className={`publish_btn ${
              validatePost.isDisabled
                ? "publish_btn_disabled"
                : "publish_btn_not_disabled"
            }`}
            disabled={validatePost.isDisabled}
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreatePost
