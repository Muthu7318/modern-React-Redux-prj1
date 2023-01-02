function ProfileCard({ title, handle, image }) {
  return (
    <div>
      <div>Title is {title}</div>
      <img src={image} alt={`img - ${title}`}></img>
      <div>Handle is {handle}</div>
    </div>
  );
}

export default ProfileCard;
