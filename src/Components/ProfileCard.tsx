import profileImage from '../assets/picture.jpg'

function ProfileCard() {
  return (
    <aside className="profile">
      <p className="eyebrow pb-4">Portraits / Editorial / Creative Direction</p>
      <img
        className="profile-image block object-cover"
        src={profileImage}
        alt="Profile picture of Sophia Sargado, a freelance photographer based in Taguig, Metro Manila."
      />
      <h1 className="title">Sophenema</h1>
      <div className="profile-meta">
        <h2 className="subtitle">Sophia Sargado</h2>
        <p className="job-title">Freelance Photographer</p>
        <p className="address">Taguig, Metro Manila</p>
      </div>
      <p className="bio">
        Girlfriend of Gilbert Dolz
      </p>
      <a className="contact-link" href="mailto:hello@sophenema.com">
        sopiasargado@gmail.com
      </a>
    </aside>
  )
}

export default ProfileCard
