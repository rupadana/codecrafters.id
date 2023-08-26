import 'dotenv/config';
export default class App {
  static API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  static HTTP_OK = 200;

  static HTTP_SERVER_ERROR = 500;

  static HTTP_NOT_FOUND = 404;

  static HTTP_UNAUTHORIZED = 401;

  static HTTP_FORBIDDEN = 403;

  static HTTP_UNPROCESSABLE_CONTENT = 422;

  static HTTP_BAD_REQUEST = 400;

  static HTTP_NOT_ACCEPTABLE = 406;

  static HTTP_TOO_MANY_REQUEST = 429;

  static SERVER_ERROR_MESSAGE = 'Maaf, silahkan dicoba beberapa saat lagi!';

  static TIME_OUT_MESSAGE = 'Maaf, batas waktu koneksi berakhir. Silahkan dicoba beberapa saat lagi!';

  static ERROR_MESSAGE = 'Oops, terjadi kesalahan. Hubungi admin!';

  static CHECK_CONNECTION_MESSAGE = 'Koneksi bermasalah. Silahkan coba lagi!';

  static UNAUTHORIZED_MESSAGE = 'Authentication gagal atau telah berakhir. Silahkan melakukan login ulang!';

  static NOT_FOUND_MESSAGE = 'Data tidak ditemukan!';

  static TOO_MANY_REQUEST_MESSAGE = 'Terlalu banyak permintaan. Silahkan coba beberapa saat lagi!';
}
