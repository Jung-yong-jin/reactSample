import createModalProvider from "./createModalProvider";
import DeleteModalContent from "./DeleteModalContent";
import CreateMemberModalContent from "../members/CreateMemberModalContent";

export const CONFIRM_DELETE_MODEAL = 'confirm_delete';
export const CREATE_MEMBER_MODAL = 'create_member_modal';

const CONTENT_MAP ={
    [CONFIRM_DELETE_MODEAL]: DeleteModalContent,
    [CREATE_MEMBER_MODAL]: CreateMemberModalContent,
}

export default createModalProvider(CONTENT_MAP);