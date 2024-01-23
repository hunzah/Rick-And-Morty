import { CharacterType, ParamsType, ResponseType } from '@/assets/api/types'
import axios from 'axios'

export const getCharacters = async (params?: ParamsType): Promise<ResponseType<CharacterType>> => {
  const url = `${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}/character`

  return await axios.get<ResponseType<CharacterType>>(url, { params }).then(res => res.data)
}

export const getCharacter = async (params: { id: string }): Promise<CharacterType> => {
  const url = `${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}/character/${params.id}`

  return await axios.get<CharacterType>(url).then(res => res.data)
}
