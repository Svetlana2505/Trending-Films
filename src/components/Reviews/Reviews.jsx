import { List, Title, Item, Text } from './Reviews.styled';
import { Notification } from 'components/Notification/Notification';

export const Reviews = ({ reviews }) => {
  return (
    <>
      {reviews.length ? (
        <List>
          {reviews.map(({ author, content, id }) => (
            <Item key={id}>
              <Title>Author: {author}</Title>
              <Text>{content}</Text>
            </Item>
          ))}
        </List>
      ) : (
        <Notification message="We don't have any reviews for this movie" />
      )}
    </>
  );
};
