import { TextInput, PasswordInput, Button, Stack, Title, Text, Box, Container, Anchor, Group } from "@mantine/core";
import { useForm } from '@mantine/form';

const Login = () => {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
  });

  return (
    <Group wrap="nowrap" h="100vh" gap={0}>
      <Box 
        style={{
          flex: '1',
          height: '100vh',
          backgroundImage: 'url("https://images.unsplash.com/photo-1731663020994-b3dbcaf14ac7?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <Box 
        style={{
          width: '500px',
          height: '100vh',
          backgroundColor: 'white',
          padding: '40px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container size="xs">
          <Stack gap="md">
            <Title order={1}>Sign in</Title>
            <Text c="dimmed" size="sm">
              Enter your email and password to login
            </Text>

            <form onSubmit={form.onSubmit((values) => console.log(values))}>
              <Stack gap="md">
                <TextInput
                  required
                  label="Email"
                  placeholder="youremail@domain.com"
                  {...form.getInputProps('email')}
                />

                <PasswordInput
                  required
                  label="Password"
                  placeholder="••••••••"
                  {...form.getInputProps('password')}
                />

                <Button type="submit" fullWidth>
                  Sign in
                </Button>

                <Box mt="sm">
                  <Stack gap="xs" align="center" style={{ textAlign: 'center' }}>
                    <Anchor component="button" type="button" c="dimmed" size="sm">
                      Forgot your password? Reset
                    </Anchor>
                    <Text size="sm" c="dimmed">
                      Don't have an account?{' '}
                      <Anchor component="button" type="button" fw={500}>
                        Start with a 14 days trial
                      </Anchor>
                    </Text>
                  </Stack>
                </Box>
              </Stack>
            </form>
          </Stack>
        </Container>
      </Box>
    </Group>
  );
};

export default Login;