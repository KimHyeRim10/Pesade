import { Link } from "react-router-dom";
import "../css/login.css";

export default function Login() {
  return (
    <div className="content">
      <div className="login">
        <h2 className="login-title">Login</h2>
        <div className="login-title-kor">로그인</div>
        <form action="">
          <ul>
            <li>
              <input
                className="login-input"
                type="text"
                name="userId"
                placeholder="  ID"
              />
            </li>
            <li>
              <input
                className="login-input"
                type="password"
                name="userPass"
                placeholder="  Password"
              />
            </li>
            <li>
              <button className="login-button" type="submit">
                Login
              </button>
            </li>
          </ul>
          <div className="login-find">
            <Link to="/login/idfind"> 아이디찾기</Link>
            <Link to="/login/passwordfind"> 비밀번호찾기</Link>
          </div>
          <div>
            <ul className="login-sns">
              <li className="login-sns-button">
                <a className="login-sns-link" href="#">
                  <img
                    className="login-sns-image"
                    src="/memberimages/kakao.png"
                  />
                  &nbsp;Kakao
                </a>
              </li>
              <li className="login-sns-button">
                <a className="login-sns-link" href="#">
                  <img
                    className="login-sns-image"
                    src="/memberimages/naver.png"
                  />
                  &nbsp;Naver
                </a>
              </li>
            </ul>
          </div>
          <div className="login-bar"></div>
          <div>
            <ul className="login-join-box">
              <li className="login-join-button">
                <Link to="/signup"> 회원가입</Link>
              </li>
              <li className="login-join-button">
                <a href="">비회원 주문조회</a>
              </li>
            </ul>
            <div className="login-description-box">
              <p className="login-description">
                * 신규회원 3천원 쿠폰&카카오 플친 추가 천원 쿠폰증정
              </p>
              <p className="login-description">
                * 공식 온라인 스토어 단독 혜택 모든 제품 구매시 무료배송
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
