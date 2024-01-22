import axios from 'axios'

export const getCharacters = async () => {
  const url = `${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}/character`
  const { data } = await axios(url)

  return {
    characters: data,
  }
}
