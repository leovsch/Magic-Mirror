<script>
export default {
    name:"MathService",
    methods: {
        kelvinToCelsius: function(kelvin) {
			return Math.ceil(kelvin - 272.15);
		}
    }
}
</script>
