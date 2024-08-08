import React from "react";

const AuthModal = () => {
  return (
    <div>
      <div>개인정보 수집, 이용에 대한 동의</div>
      <div>info</div>
      <form>
        <input type="text" placeholder="이름" />
        <div>
          <input type="text" placeholder="전화번호" />
          <button>인증번호</button>
        </div>
        <input type="number" placeholder="인증번호" />
        <p>개인정보 수집 및 이용에 동의하십니까?</p>
        <p>
          귀하께서는 본 동의를 거부하실 권리가 있으며, 미 동의시 본 이벤트에
          참여하실 수 없습니다.
        </p>
        <div>
          <div>
            동의
            <input type="radio" value="" />
          </div>
          <div>
            미동의
            <input type="radio" value="" />
          </div>
        </div>
        <button type="submit">인증하기</button>
      </form>
      <div>info</div>
      <div>error toast</div>
    </div>
  );
};

export default AuthModal;
