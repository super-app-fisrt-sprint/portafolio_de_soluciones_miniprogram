const empresasVideosViewModel = require("../main/domain/empresasVideosViewModel");
const RequestGetEmpresasVideos = require("../main/data/attributes/empresasVideos/entities/RequestGetEmpresasVideos");
const EmpresasVideosRepository = require("../main/data/attributes/empresasVideos/repository/EmpresasVideosRepository");

describe("Set de pruebas para empresas videos", () => {

  test("Prueba de recuperación exitosa de empresas videos", async () => {
    const empresasVideoRepository = new EmpresasVideosRepository();
    const mockResponse = {
      data: {
        response: [{
          id: 1,
          name: "video1"
        }, {
          id: 2,
          name: "video2"
        }]
      }
    };
    const spy = jest.spyOn(empresasVideoRepository, 'getEmpresasVideosRemote').mockResolvedValue(mockResponse);
    const result = await spy();
    const expected = new RequestGetEmpresasVideos(mockResponse.data.response).data;
    expect(result.data.response).toEqual(expected);
  });

  test("los datos de la respuesta de prueba tienen un código de error distinto de 0", async () => {
    const empresasVideoRepository = new EmpresasVideosRepository();
    const mockResponse = {
      data: {
        error: 1,
        response: null
      }
    };

    jest.spyOn(empresasVideoRepository, 'getEmpresasVideosRemote').mockResolvedValue(mockResponse);

    const result = await empresasVideosViewModel.requestGetEmpresasVideos();
    expect(result).toEqual(false);
  });

  test("comprobar la correcta gestión de los errores detectados", async () => {
    const empresasVideoRepository = new EmpresasVideosRepository();
    jest.spyOn(empresasVideoRepository, 'getEmpresasVideosRemote').mockRejectedValue(new Error("Error"));
    const result = await empresasVideosViewModel.requestGetEmpresasVideos();
    expect(result).toEqual(false);
  });
});