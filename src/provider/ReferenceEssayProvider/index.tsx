import {
  useEffect,
  useReducer,
  type ReactNode,
  useCallback,
} from "react";
import { ReferenceEssayContext } from "./ReferenceEssayContext";
import {
  referenceEssayReducer,
  initialStateReferenceEssay,
} from "../../reducer/referenceEssayReducer";
import {
  getReferenceEssays,
  create_reference_essay,
  delete_reference_essay,
  update_reference_essay,
} from "../../services/referenceEssay";

type ReferenceEssayProviderProps = {
  children: ReactNode;
};

export const ReferenceEssayProvider = ({
  children,
}: ReferenceEssayProviderProps) => {
  const [stateReferenceEssay, dispatchReferenceEssay] = useReducer(
    referenceEssayReducer,
    initialStateReferenceEssay
  );

  const loadReferenceEssays = useCallback(
    async (params?: {
      year?: number;
      categoryId?: number;
      search?: string;
    }) => {
      try {
        dispatchReferenceEssay({ type: "SET_LOADING", payload: true });

        const essays = await getReferenceEssays(params);

        dispatchReferenceEssay({
          type: "SET_REFERENCE_ESSAY",
          payload: essays,
        });
      } catch (error) {
        console.error(error);
        dispatchReferenceEssay({
          type: "SET_ERROR",
          payload: "Erro ao carregar redações de referência",
        });
      } finally {
        dispatchReferenceEssay({ type: "SET_LOADING", payload: false });
      }
    },
    []
  );

  useEffect(() => {
    loadReferenceEssays();
  }, [loadReferenceEssays]);

  const createReferenceEssay = async (data: any) => {
    try {
      dispatchReferenceEssay({ type: "SET_LOADING", payload: true });

      const response = await create_reference_essay(data);

      await loadReferenceEssays();

      return response;
    } catch (error) {
      console.error(error);

      const message =
        error instanceof Error
          ? error.message
          : "Erro ao criar redação de referência";

      dispatchReferenceEssay({ type: "SET_ERROR", payload: message });
      throw error;
    } finally {
      dispatchReferenceEssay({ type: "SET_LOADING", payload: false });
    }
  };

  const deleteReferenceEssay = async (id: number) => {
    try {
      dispatchReferenceEssay({ type: "SET_LOADING", payload: true });

      await delete_reference_essay(id);

      dispatchReferenceEssay({
        type: "DELETE_REFERENCE_ESSAY",
        payload: id,
      });
    } catch (error) {
      console.error(error);

      const message =
        error instanceof Error
          ? error.message
          : "Erro ao excluir redação de referência";

      dispatchReferenceEssay({ type: "SET_ERROR", payload: message });
      throw error;
    } finally {
      dispatchReferenceEssay({ type: "SET_LOADING", payload: false });
    }
  };

  const updateReferenceEssay = async (id: number, data: any) => {
    try {
      dispatchReferenceEssay({ type: "SET_LOADING", payload: true });

      const updatedEssay = await update_reference_essay(id, data);

      dispatchReferenceEssay({
        type: "UPDATE_REFERENCE_ESSAY",
        payload: updatedEssay,
      });

      await loadReferenceEssays();

      return updatedEssay;
    } catch (error) {
      console.error(error);

      const message =
        error instanceof Error
          ? error.message
          : "Erro ao atualizar redação de referência";

      dispatchReferenceEssay({ type: "SET_ERROR", payload: message });
      throw error;
    } finally {
      dispatchReferenceEssay({ type: "SET_LOADING", payload: false });
    }
  };

  return (
    <ReferenceEssayContext.Provider
      value={{
        stateReferenceEssay,
        dispatchReferenceEssay,
        loadReferenceEssays,
        createReferenceEssay,
        deleteReferenceEssay,
        updateReferenceEssay,
      }}
    >
      {children}
    </ReferenceEssayContext.Provider>
  );
};