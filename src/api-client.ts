import axios from 'axios';
import { Agenda } from './angenda.model';

const URL_PATH = "http://www.raydelto.org/agenda.php";

export const readData = async (): Promise<Agenda[]> => {
    const response = await axios.get(URL_PATH);

    return response.data;
}