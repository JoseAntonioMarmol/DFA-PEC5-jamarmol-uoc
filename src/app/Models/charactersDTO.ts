export interface  CharacterDTO{

    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: originDTO;
    location: locationDTO;
    image: string;
    episode: string[];
    url: string;
    created: string;
}
export interface  CharacterListResponseDTO {
    results: CharacterDTO[];
    info: InfoDTO;
}
export interface  InfoDTO {
    count: number;
    pages: number;
    next: string;
    prev: string;
}
export interface originDTO {
    name: string;
    url: string;
}
export interface locationDTO {
    name: string;
    url: string;
}