
import { List, Item, Title, Text, Box } from './ActorList.styled';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';

export const ActorList = ({ actor }) => {
  return (
    <>
      {actor && (
        <List>
          {actor.map(({ id, profile_path, name, character }) => (
            <Item key={id}>
              {profile_path ? (
                <img src={`${IMAGE_URL}${profile_path}`} alt="" />
              ) : (
                'not image'
              )}
              <Box>
                <Title>{name}</Title>
                <Text>Character: {character}</Text>
              </Box>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};
