// import { useMutation, useQueryClient } from "@tanstack/react-query";

// export const useAuth = () => {
//     const queryClient = useQueryClient();

//     const loginMutation = useMutation(login, {
//         onSuccess: (data) => {
//             // Set the authentication token or user data in React Query
//             // e.g., queryClient.setQueryData('user', data.user);
//         },
//     });

//     const logoutMutation = useMutation(logout, {
//         onSuccess: () => {
//             // Clear the authentication token or user data in React Query
//             // e.g., queryClient.removeQueryData('user');
//         },
//     });

//     return { loginMutation, logoutMutation };
// };