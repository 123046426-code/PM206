$root = 'd:\Escritorio\Noveno Cuatrimestre\Programacion movil\PM206\practica19\usuarioApi\usuarioApi'
$out = @()
$out += 'node_modules=' + (Test-Path (Join-Path $root 'node_modules'))
$out += 'expo-font-pkg=' + (Test-Path (Join-Path $root 'node_modules\expo-font\package.json'))
$out += 'rng-pkg=' + (Test-Path (Join-Path $root 'node_modules\react-native-gesture-handler\package.json'))
$out += 'expo-cli=' + (Test-Path (Join-Path $root 'node_modules\@expo\cli\package.json'))
$out += 'install-log-size=' + (Get-Item (Join-Path $root 'install_out.log') -ErrorAction SilentlyContinue).Length
$out | Set-Content (Join-Path $root 'prog.log') -Encoding ascii
