const companiesVideosViewModel = require("../main/domain/companiesVideosViewModel.js");
const RequestGetCompaniesVideos = require("../main/data/attributes/companiesVideos/entities/RequestGetCompaniesVideos.js");
const CompaniesVideosRepository = require("../main/data/attributes/companiesVideos/repository/CompaniesVideosRepository.js");

describe("Set de pruebas para empresas videos", () => {

  test("Prueba de recuperación exitosa de empresas videos", async () => {
    const companiesVideosRepository = new CompaniesVideosRepository();
    const mockResponse = {
      data: {
        error: 0,
        response: [{
          id: 1,
          name: "Video 1"
        }, {
          id: 2,
          name: "Video 2"
        }]
      }
    };
    const spy = jest.spyOn(companiesVideosRepository, 'getCompaniesVideosRemote').mockResolvedValue(mockResponse);
    const result = await companiesVideosViewModel.requestGetComapaniesVideos();
    expect(spy).toHaveBeenCalled();
    expect(result).toEqual(new RequestGetCompaniesVideos(mockResponse.data.response));
  });

  test("los datos de la respuesta de prueba tienen un código de error distinto de 0", async () => {
    const companiesVideosRepository = new CompaniesVideosRepository();
    const mockResponse = {
      data: {
        error: 1,
        response: null
      }
    };

    jest.spyOn(companiesVideosRepository, 'getCompaniesVideosRemote').mockResolvedValue(mockResponse);

    const result = await companiesVideosViewModel.requestGetComapaniesVideos();
    expect(result).toEqual(false);
  });

  test("comprobar la correcta gestión de los errores detectados", async () => {
    const companiesVideosRepository = new CompaniesVideosRepository();
    jest.spyOn(companiesVideosRepository, 'getCompaniesVideosRemote').mockRejectedValue(new Error("Error"));
    const result = await companiesVideosViewModel.requestGetComapaniesVideos();
    expect(result).toEqual(false);
  });
});