import FieldText from '../FieldText/FieldText';
import SmallIconButton from '../SmallIconButton/SmallIconButton';
import styles from './searchBox.module.css';
import { gql, grafbase } from '@/lib/grafbase';

type UserByEmail = {
  _id: string;
  name: string;
  email: string;
};

type UserRquest = {
  getUserByEmail: UserByEmail;
};

const GetUser = gql`
  query GetUser($email: String) {
    getUserByEmail(email: $email) {
      _id
      name
      email
    }
  }
`;

const SearchBox = () => {
  const handleSubmit = async (formData: FormData) => {
    'use server';
    // event.preventDefault();
    console.log(formData.get('term'));
    const { getUserByEmail }: UserRquest = await grafbase.request(GetUser, {
      email: 'nicolastonelli@hotmail.com.ar',
    });

    console.log('AAA', getUserByEmail.email, getUserByEmail.name);
  };

  return (
    <form className={styles.container} action={handleSubmit}>
      <FieldText
        name="term"
        type="text"
        placeholder="CABA, Córdoba, Tres Arroyos,..."
        margin={false}
      />
      <SmallIconButton type="submit" />
    </form>
  );
};

export default SearchBox;
