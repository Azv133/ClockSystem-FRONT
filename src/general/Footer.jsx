
export const Footer = () => {
  return (
    <footer>
        <div className="content-container w-full footer-space">
            <div className="flex justify-start items-center footer-logo ">
                <img src="public\svg\Logo3.svg" alt="" />
                <label>ClockSystem</label>
            </div>

            <hr />

            <div className="flex justify-center items-center footer-ref">
                <a>© 2024 ClockSystem</a>
                <a>Terms of Service</a>
                <a>Privacy & Cookies policy</a>
            </div>
        </div>
    </footer>
  )
}
