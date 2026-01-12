import { useNavigate } from "react-router-dom";

const DashboardCard = ({
  title, leadingText, logos, background, navigateTo
}) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navigateTo);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundImage: background ? `url(${background})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="
        max-h-full min-h-72 cursor-pointer rounded-xl flex flex-col justify-between py-10 px-8 xl:px-16 transition-transform duration-200 hover:scale-105 hover:shadow-xl"
    >
      <div>
        <h2 className="text-2xl font-semibold mb-3">
          {title}
        </h2>
        <p className="mb-4">
          {leadingText}
        </p>
      </div>

      <div>
        <p className="mb-3 text-sm">
          In collaboration with
        </p>
        <div className="flex items-center gap-4">
          {logos.map((logo, index) => (
            <div className="rounded-full w-16 h-16 p-2 bg-white/80 flex items-center justify-center">
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="min-h-4 h-ful"
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
export default DashboardCard;