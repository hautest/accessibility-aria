export const RequireInput = () => {
  return (
    <>
      <div>aria-required 없음</div>
      <label htmlFor="email">이메일</label>
      <input id="email" />
      <br />
      <br />
      <div>aria-required 있음</div>
      <label htmlFor="email2">이메일</label>
      <input id="email2" aria-required="true" />
    </>
  );
};
