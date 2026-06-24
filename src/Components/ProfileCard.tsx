import profileImage from '../assets/picture.jpg'

type ProfileCardProps = {
  onOpenContact: () => void;
};

function ProfileCard({ onOpenContact }: ProfileCardProps) {
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

      <button
        className="contact-button w-30 mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition hover:-translate-y-1"
        onClick={onOpenContact}
      >
        Contact Me
      </button>

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
