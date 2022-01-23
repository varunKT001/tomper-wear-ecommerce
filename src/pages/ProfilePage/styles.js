import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
  .profile-img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-radius: 50%;
    img {
      width: 150px;
      height: 150px;
      margin-bottom: 1rem;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  .file-input {
    display: none;
  }
  form {
    min-width: 300px;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .form-control {
      width: 100%;
      margin-bottom: 1.25rem;
    }
    .input {
      width: 100%;
      padding: 0.5rem;
      background: var(--clr-grey-10);
      border-radius: var(--radius);
      border-color: transparent;
      letter-spacing: var(--spacing);
    }
    .input::placeholder {
      text-transform: capitalize;
    }
    .submit-btn {
      width: 100%;
    }
  }
  .seperator {
    position: relative;
    min-width: 300px;
    max-width: 400px;
    display: flex;
    align-items: center;
    margin: 3rem 0;
    span {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      padding: 0.5rem;
      background: white;
      font-weight: 500;
    }
    hr {
      width: 100%;
    }
  }
  .btn-container {
    min-width: 300px;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .link {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
    }
  }
`;

export default Wrapper;
