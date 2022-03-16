import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Title from '../Title';
import { Button, Checkbox, Flex, FormControl, FormErrorMessage, FormLabel, Icon, Input, InputGroup, InputLeftElement, InputRightElement, Link, Spacer, useToast } from '@chakra-ui/react';
import { RiUser3Fill } from 'react-icons/ri';
import { RiLockPasswordFill } from 'react-icons/ri';
import { BiShowAlt, BiHide } from 'react-icons/bi';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import ButtonAction from '../ButtonAction';
import { Link as ReactRouterDom_Link } from 'react-router-dom';
import authApi from '../../../../api/authApi';

LogIn.propTypes = {

};

const loginSchema = yup.object().shape({
   userName: yup
      .string()
      .required('⚠ Username invalid'),
   password: yup
      .string()
      .required('⚠ Password invalid'),
});

function LogIn(props) {
   const toast = useToast();

   const [showPassword, setShowPassword] = useState(false);
   const [loading, setLoading] = useState(false);

   const { register, handleSubmit, reset, formState: { errors } } = useForm({
      mode: 'all',
      resolver: yupResolver(loginSchema),
   });

   const _onSubmitForm = async (data) => {
      console.log(">>> Check login", data);

      setLoading(true);
      try {
         const params = {
            username: data.userName,
            password: data.password,
         };

         const response = await authApi.login(params);
         console.log('>>> Check login/response: ', response);

         toast({
            title: 'WELCOME BACK !!',
            description: response.data.message,
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: 'top',
            variant: 'left-accent',
         });
      } catch (error) {
         console.log('>>> Check login/response - errors: ', error.response);
         toast({
            title: 'Error Occured!',
            description: error.response.data.message,
            status: 'error',
            duration: 3000,
            isClosable: true,
            position: 'top',
            variant: 'left-accent',
         });
      }
      finally {
         setLoading(false);
      }
   };

   return (
      <>
         <Title
            title='Log in'
            subtitle='Log in to explore other features'
         />

         <form onSubmit={handleSubmit(_onSubmitForm)}>
            <FormControl
               isRequired
               marginBottom={'4'}

               isInvalid={!!errors?.userName?.message}
               errortext={errors?.userName?.message}
            >
               <FormLabel
                  fontSize={'xl'}
               >
                  Username
               </FormLabel>
               <InputGroup>
                  <InputLeftElement
                     pointerEvents={'none'}
                     children={<Icon as={RiUser3Fill} color={'gray.300'} />}
                     height={'100%'}
                     fontSize='xl'
                  />
                  <Input
                     placeholder='ThangCuteee'
                     bg={'blackAlpha.200'}
                     focusBorderColor='pink.300'
                     lineHeight={'3'}
                     h='60px'
                     variant='filled'
                     size='lg'
                     boxShadow={'md'}
                     fontSize='md'
                     fontWeight={'semibold'}
                     {...register('userName')}
                  />
               </InputGroup>
               <FormErrorMessage>
                  {errors?.userName?.message}
               </FormErrorMessage>
            </FormControl>

            <FormControl
               isRequired
               marginBottom={'4'}

               isInvalid={!!errors?.userName?.message}
               errortext={errors?.userName?.message}
            >
               <FormLabel
                  fontSize={'xl'}
               >
                  Password
               </FormLabel>
               <InputGroup>
                  <InputLeftElement
                     pointerEvents={'none'}
                     children={<Icon as={RiLockPasswordFill} color={'gray.300'} />}
                     height={'100%'}
                     fontSize='xl'
                  />
                  <Input
                     type={showPassword ? 'text' : 'password'}
                     placeholder={showPassword ? 'ZzzThangducDuongVipPro123Zzz' : '*************'}
                     bg={'blackAlpha.200'}
                     focusBorderColor='pink.300'
                     lineHeight={'3'}
                     h='60px'
                     variant='filled'
                     size='lg'
                     boxShadow={'md'}
                     fontSize='md'
                     fontWeight={'semibold'}
                     {...register('password')}
                  />
                  <InputRightElement
                     height={'100%'}
                     width='2rem'
                     marginRight={2}
                  >
                     <Button bg={'gray.200'} size='sm' onClick={() => { setShowPassword(!showPassword) }}>
                        {showPassword ? <Icon as={BiShowAlt} /> : <Icon as={BiHide} />}
                     </Button>
                  </InputRightElement>
               </InputGroup>
               <FormErrorMessage>
                  {errors?.password?.message}
               </FormErrorMessage>
            </FormControl>

            <Flex>
               <Checkbox size='md' colorScheme='pink' defaultIsChecked>
                  Remember me
               </Checkbox>
               <Spacer />
               <Link
                  as={ReactRouterDom_Link}
                  to='/forgot-password'
                  _hover={{
                     color: 'pink.500',
                  }}
               >
                  Forgot Your Password?
               </Link>
            </Flex>

            <ButtonAction
               action='LOG IN'
               question='Not registered'
               direction='Create a account'
               isLoading={loading}
            />
         </form>
      </>
   );
}

export default LogIn;