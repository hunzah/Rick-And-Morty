import {
  CharacterType,
  EpisodeType,
  LocationType,
  ParamsType,
  ResponseType,
} from '@/assets/api/types'
import axios from 'axios'

export const getCharacters = async (params?: ParamsType): Promise<ResponseType<CharacterType>> => {
  const url = `${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}/character`

  return await axios.get<ResponseType<CharacterType>>(url, { params }).then(res => res.data)
}

export const getCharacter = async (params: { id: string }): Promise<CharacterType> => {
  const url = `${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}/character/${params.id}`

  return await axios.get<CharacterType>(url).then(res => res.data)
}

export const getLocations = async (params?: {
  name: string
  page: number
}): Promise<ResponseType<LocationType>> => {
  const url = `${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}/location`

  return await axios.get<ResponseType<LocationType>>(url, { params }).then(res => res.data)
}

export const getLocation = async (params: { id: string }): Promise<LocationType> => {
  const url = `${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}/location/${params.id}`

  return await axios.get<LocationType>(url).then(res => res.data)
}

export const getEpisodes = async (params?: {
  name: string
  page: number
}): Promise<ResponseType<EpisodeType>> => {
  const url = `${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}/episode`

  return await axios.get<ResponseType<EpisodeType>>(url, { params }).then(res => res.data)
}

export const getEpisode = async (params: { id: string }): Promise<EpisodeType> => {
  const url = `${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}/episode/${params.id}`

  return await axios.get<EpisodeType>(url).then(res => res.data)
}
